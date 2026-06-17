# TopZone — Database Schema

> Supabase PostgreSQL schema for the TopZone gaming store.

## Overview

`
+--------------+      +------------------+      +--------------+
¦    users     ¦      ¦     orders       ¦      ¦  products    ¦
¦--------------¦      ¦------------------¦      ¦--------------¦
¦ id (uuid) PK ¦?-----¦ user_id (uuid) FK¦      ¦ id (uuid) PK ¦
¦ email        ¦      ¦ id (uuid) PK     ¦      ¦ name         ¦
¦ full_name    ¦      ¦ status           ¦      ¦ slug         ¦
¦ avatar_url   ¦      ¦ total            ¦      ¦ type         ¦
¦ created_at   ¦      ¦ created_at       ¦      ¦ description  ¦
+--------------+      +------------------+      ¦ category     ¦
                               ?                ¦ img          ¦
                               ¦                ¦ created_at   ¦
                        +------------------+    +--------------+
                        ¦   order_items    ¦          ?
                        ¦------------------¦          ¦
                        ¦ id (uuid) PK     ¦    +------------------+
                        ¦ order_id (uuid) FK   ¦ product_packages ¦
                        ¦ product_id (uuid)FK  ¦------------------¦
                        ¦ product_name     ¦    ¦ id (uuid) PK     ¦
                        ¦ product_price    ¦    ¦ product_id (uuid)FK
                        ¦ quantity         ¦    ¦ label            ¦
                        ¦ type             ¦    ¦ price            ¦
                        +------------------+    +------------------+
`

## Tables

### 1. users (extends Supabase Auth)

| Column        | Type        | Notes                         |
|---------------|-------------|-------------------------------|
| id            | uuid (PK)   | References uth.users.id    |
| email         | text        | From auth                     |
| full_name     | text        | User display name             |
| avatar_url    | text        | Optional profile picture      |
| created_at    | timestamptz | Auto-set on signup            |

### 2. products

Stores both **games** and **gaming gear** in a single table using a 	ype discriminator.

| Column        | Type        | Notes                         |
|---------------|-------------|-------------------------------|
| id            | uuid (PK)   | Auto-generated                |
| name          | text        | Product display name          |
| slug          | text (unique)| URL-safe identifier          |
| type          | text        | 'game' or 'gear'          |
| description   | text        | Short product description     |
| category      | text        | 'mobile', 'pc', 'console', 'keyboard', 'mouse', 'headset' |
| img           | text        | Image path                    |
| badge         | text        | Game badge (e.g. "Terlaris")  |
| tag           | text        | Gear tag (e.g. "RGB Ready")   |
| color         | text        | Game theme color (hex)        |
| currency      | text        | Game currency (e.g. "Diamond")|
| price         | numeric     | Gear price (0 for games)      |
| created_at    | timestamptz | Auto-set                      |

### 3. product_packages

Top-up packages for each game. One game has many packages.

| Column        | Type        | Notes                         |
|---------------|-------------|-------------------------------|
| id            | uuid (PK)   | Auto-generated                |
| product_id    | uuid (FK)   | References products.id      |
| label         | text        | Display label (e.g. "86 Diamond") |
| price         | numeric     | Price in IDR                  |

### 4. gear_specs

Specifications for each gear product. One gear has many specs.

| Column        | Type        | Notes                         |
|---------------|-------------|-------------------------------|
| id            | uuid (PK)   | Auto-generated                |
| product_id    | uuid (FK)   | References products.id      |
| label         | text        | Spec name (e.g. "DPI")        |
| value         | text        | Spec value (e.g. "12000")     |

### 5. orders

| Column        | Type        | Notes                         |
|---------------|-------------|-------------------------------|
| id            | uuid (PK)   | Auto-generated                |
| user_id       | uuid (FK)   | References users.id         |
| status        | text        | 'pending', 'processing', 'completed', 'cancelled' |
| total         | numeric     | Order total in IDR            |
| created_at    | timestamptz | Auto-set                      |
| updated_at    | timestamptz | Auto-set on status change     |

### 6. order_items

| Column        | Type        | Notes                         |
|---------------|-------------|-------------------------------|
| id            | uuid (PK)   | Auto-generated                |
| order_id      | uuid (FK)   | References orders.id        |
| product_id    | uuid (FK)   | References products.id      |
| product_name  | text        | Denormalized name (snapshot)  |
| product_price | numeric     | Denormalized price (snapshot) |
| quantity      | integer     | Number ordered                |
| type          | text        | 'game' or 'gear'          |

## Row Level Security (RLS)

- **users**: Users can only read/update their own profile.
- **products**: Public read, admin-only write.
- **orders**: Users can only see their own orders.
- **order_items**: Accessible only through parent order's RLS.
