-- supabase/migrations/0004_reviews.sql
-- Create reviews table for product reviews and ratings

-- Reviews table
create table if not exists reviews (
  id            uuid primary key default gen_random_uuid(),
  product_id    uuid not null references products(id) on delete cascade,
  user_id       uuid not null references auth.users(id) on delete cascade,
  order_id      uuid references orders(id) on delete set null,
  rating        integer not null check (rating >= 1 and rating <= 5),
  title         text not null default '',
  comment       text not null default '',
  is_verified   boolean not null default false,
  is_approved   boolean not null default false,
  helpful_count integer not null default 0,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Review helpful votes (thumbs up/down)
create table if not exists review_votes (
  id          uuid primary key default gen_random_uuid(),
  review_id   uuid not null references reviews(id) on delete cascade,
  user_id     uuid not null references auth.users(id) on delete cascade,
  vote_type   text not null check (vote_type in ('helpful', 'not_helpful')),
  created_at  timestamptz not null default now(),
  unique(review_id, user_id)
);

-- Auto-update updated_at trigger
create trigger trigger_reviews_updated_at
  before update on reviews
  for each row
  execute function update_updated_at();

-- Indexes
create index if not exists idx_reviews_product_id on reviews(product_id);
create index if not exists idx_reviews_user_id on reviews(user_id);
create index if not exists idx_reviews_order_id on reviews(order_id);
create index if not exists idx_reviews_rating on reviews(rating);
create index if not exists idx_reviews_approved on reviews(is_approved);
create index if not exists idx_review_votes_review_id on review_votes(review_id);
create index if not exists idx_review_votes_user_id on review_votes(user_id);

-- Enable RLS
alter table reviews enable row level security;
alter table review_votes enable row level security;

-- RLS policies
create policy "Approved reviews are viewable by everyone"
  on reviews for select
  using (is_approved = true);

create policy "Users view own reviews"
  on reviews for select
  using (auth.uid() = user_id);

create policy "Users insert own reviews"
  on reviews for insert
  with check (auth.uid() = user_id);

create policy "Users update own reviews"
  on reviews for update
  using (auth.uid() = user_id);

create policy "Users view own review votes"
  on review_votes for select
  using (auth.uid() = user_id);

create policy "Users insert own review votes"
  on review_votes for insert
  with check (auth.uid() = user_id);

-- Grant permissions for REST API access
GRANT SELECT ON reviews TO anon;
GRANT SELECT ON reviews TO service_role;
GRANT INSERT ON reviews TO service_role;
GRANT UPDATE ON reviews TO service_role;
GRANT SELECT ON review_votes TO anon;
GRANT SELECT ON review_votes TO service_role;
GRANT INSERT ON review_votes TO service_role;