# TopZone Database Schema

## Tables

### products
| Column | Type | Description |
|--------|------|-------------|
| id | uuid PK | |
| created_at | timestamptz | |
| name | text | Product name |
| slug | text UNIQUE | URL slug |
| img | text | Image path |
| price | int8 | Price in IDR (gear only) |
| tag | text | Badge label (gear) |
| color | text | Theme color (game) |
| badge | text | Badge text (game) |
| category | text | mobile/pc/console or keyboard/mouse/headset/monitor |
| currency | text | Currency name (game) |
| description | text | Product description |
| type | text | 'game' or 'gear' |

### product_packages
| Column | Type | Description |
|--------|------|-------------|
| id | uuid PK | |
| product_id | uuid FK -> products.id | |
| label | text | Package name (e.g. "140 Diamond") |
| price | int8 | Price in IDR |

### gear_specs
| Column | Type | Description |
|--------|------|-------------|
| id | uuid PK | |
| product_id | uuid FK -> products.id | |
| label | text | Spec name (e.g. "DPI") |
| value | text | Spec value (e.g. "12000") |

### orders
| Column | Type | Description |
|--------|------|-------------|
| id | uuid PK | |
| created_at | timestamptz | |
| user_email | text | |
| name | text | Customer name |
| phone | text | |
| payment | text | Payment method |
| status | text | pending/processing/completed/cancelled |
| total | int8 | |
| items | jsonb | Array of ordered items |
