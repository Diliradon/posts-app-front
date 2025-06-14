'use client';

import * as React from 'react';

import Link from 'next/link';

import { Package, Plus } from 'lucide-react';

import {
  LanguageSwitcher,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from 'shared/ui';

import { NavUser, SidebarNavItem } from './ui';

const navigation = [
  {
    name: 'Posts',
    href: '/',
    icon: <Package size={16} className="min-w-4" />,
  },
  {
    name: 'Create Post',
    href: '/post-create',
    icon: <Plus size={16} className="min-w-4" />,
  },
];

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible="icon" {...props}>
    <SidebarHeader>
      <NavUser />
    </SidebarHeader>
    <SidebarContent>
      {navigation.map(navItem => (
        <SidebarNavItem key={navItem.name} {...navItem} />
      ))}
    </SidebarContent>
    <SidebarFooter className="flex items-center justify-between">
      <Link href="https://github.com/Diliradon" target="_blank">
        Git Hub
      </Link>
      <LanguageSwitcher />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
);
