create schema if not exists poolwater;

create table if not exists poolwater.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  phone text,
  source text default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function poolwater.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists waitlist_set_updated_at on poolwater.waitlist;

create trigger waitlist_set_updated_at
before update on poolwater.waitlist
for each row
execute function poolwater.set_updated_at();

alter table poolwater.waitlist enable row level security;

drop policy if exists "anon_insert_waitlist" on poolwater.waitlist;
create policy "anon_insert_waitlist"
on poolwater.waitlist
for insert
to anon
with check (true);

drop policy if exists "anon_update_waitlist" on poolwater.waitlist;
create policy "anon_update_waitlist"
on poolwater.waitlist
for update
to anon
using (true)
with check (true);
