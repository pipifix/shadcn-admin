import { Button } from "@/components/ui/button";
import {
  Factory,
  Users,
  Network,
  ShieldCheck,
  ChevronDown,
  Globe,
  ShoppingCart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CompanyDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative border-0 p-0 m-0">
          <Factory className=" h-6 w-6 m-2 b-2  text-primary" />
          procilon GmbH
          <ChevronDown className="my-3 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              Deine Organisation
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Factory className="h-4 w-4 mr-1" />
            Organisationsdaten
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className="h-4 w-4 mr-1" />
            Mitarbeiterverwaltung
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className="h-4 w-4 mr-1" />
            Gästeverwaltung
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Network className="h-4 w-4 mr-1" />
            Abteilungen und Gruppen
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShieldCheck className="h-4 w-4 mr-1" />
            Zertifikate
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Globe className="h-4 w-4 mr-1" />
            Domains
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <ShoppingCart className="h-4 w-4 mr-1" />
          Shop + Rechnungen
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
