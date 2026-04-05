// src/types/sidebar.ts

export interface SidebarItem {
  title: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

export interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsed?: boolean
}
