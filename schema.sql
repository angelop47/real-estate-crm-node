
create extension if not exists "uuid-ossp";

-- 1. Users (Agents/Admins)
create table users (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique not null,
  password_hash text not null,
  role text check (role in ('admin', 'agent')) default 'agent',
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Departments (Provinces/States)
create table departments (
  id uuid primary key default uuid_generate_v4(),
  name text not null
);

-- 3. Cities
create table cities (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  department_id uuid references departments(id) on delete cascade not null
);

-- 4. Properties
create table properties (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  price numeric,
  city_id uuid references cities(id),
  department_id uuid references departments(id), -- Redundant but useful
  bedrooms integer default 0,
  bathrooms integer default 0,
  square_feet numeric default 0,
  images text[] default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Clients
create table clients (
  id uuid primary key default uuid_generate_v4(),
  first_name text,
  last_name text,
  email text,
  phone text,
  type text check (type in ('buyer', 'seller', 'tenant', 'landlord', 'investor')),
  status text check (status in ('new', 'active', 'closed', 'inactive')) default 'new',
  budget_min numeric,
  budget_max numeric,
  notes text,
  assigned_agent_id uuid references users(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table users enable row level security;
alter table departments enable row level security;
alter table cities enable row level security;
alter table properties enable row level security;
alter table clients enable row level security;

create policy "Public access" on users for all using (true);
create policy "Public access" on departments for all using (true);
create policy "Public access" on cities for all using (true);
create policy "Public access" on properties for all using (true);
create policy "Public access" on clients for all using (true);
