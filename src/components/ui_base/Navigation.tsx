import {
  NavigationMenu as BaseNavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

interface Props {
  data: {
    title: string;
    link: string;
  }[]
}

const NavigationMenu = () => {
  return(
<BaseNavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">Home </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
   <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/Blog">Blog </NavigationMenuLink>
</NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/Projects">Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

  </NavigationMenuList>
</BaseNavigationMenu>
  );
}

export default NavigationMenu