import { MenuItem } from "../types";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItemCard = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="flex flex-row items-center justify-between cursor-pointer">
      <div>
        <CardHeader>
          <CardTitle>{menuItem.name}</CardTitle>
        </CardHeader>
        <CardContent className="font-bold">
          {(menuItem.price / 100).toFixed(2)}
        </CardContent>
      </div>
      <Button className="mr-5" onClick={addToCart}>
        Add
      </Button>
    </Card>
  );
};

export default MenuItemCard;
