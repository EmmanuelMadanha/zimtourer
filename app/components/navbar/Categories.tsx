'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiHutsVillage, 
  GiIsland,
  GiLion,
} from 'react-icons/gi';
import { FaBed } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { BiRestaurant } from 'react-icons/bi';
import { IoDiamond } from 'react-icons/io5';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Dam',
    icon: TbBeach,
    description: 'This property is close to the dam!',
  },
  {
    label: 'Lodges',
    icon: FaBed,
    description: 'This property is a lodge!',
  },
  {
    label: 'Restaurant',
    icon: BiRestaurant,
    description: 'This property is a restaurant!'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This listing is near a lake!'
  },
  {
    label: 'Wildlife',
    icon: GiLion,
    description: 'This property has wildlife activies!'
  },
  {
    label: 'Ruins',
    icon: GiCastle,
    description: 'This property is near the Zimbabwe monumental Ruins!'
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'This attraction is one of the caves in Zimbabwe!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Marondera',
    icon: BsSnow,
    description: 'The weather in this part here is very cold!'
  },
  {
    label: 'Sand',
    icon: GiCactus,
    description: 'This property has the natural sand surfaces!'
  },
  {
    label: 'Huts',
    icon: GiHutsVillage,
    description: 'This property is in a hut!'
  },
  {
    label: 'Hotels',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;