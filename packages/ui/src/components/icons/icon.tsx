// No edit this file, this file is generated by generate-icons.js
import { ReactComponent as Add } from '../../icons/processed/add.svg';
import { ReactComponent as ArrowDown } from '../../icons/processed/arrowDown.svg';
import { ReactComponent as ArrowLeft } from '../../icons/processed/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../icons/processed/arrowRight.svg';
import { ReactComponent as ArrowUp } from '../../icons/processed/arrowUp.svg';
import { ReactComponent as Bell } from '../../icons/processed/bell.svg';
import { ReactComponent as Calendar } from '../../icons/processed/calendar.svg';
import { ReactComponent as Check } from '../../icons/processed/check.svg';
import { ReactComponent as ChevronDown } from '../../icons/processed/chevronDown.svg';
import { ReactComponent as ChevronLeft } from '../../icons/processed/chevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../icons/processed/chevronRight.svg';
import { ReactComponent as ChevronUp } from '../../icons/processed/chevronUp.svg';
import { ReactComponent as Clock } from '../../icons/processed/clock.svg';
import { ReactComponent as Close } from '../../icons/processed/close.svg';
import { ReactComponent as Ellipsis } from '../../icons/processed/ellipsis.svg';
import { ReactComponent as EllipsisVertical } from '../../icons/processed/ellipsisVertical.svg';
import { ReactComponent as Eye } from '../../icons/processed/eye.svg';
import { ReactComponent as EyeSlash } from '../../icons/processed/eyeSlash.svg';
import { ReactComponent as Heart } from '../../icons/processed/heart.svg';
import { ReactComponent as HeartSolid } from '../../icons/processed/heartSolid.svg';
import { ReactComponent as Home } from '../../icons/processed/home.svg';
import { ReactComponent as Location } from '../../icons/processed/location.svg';
import { ReactComponent as Lock } from '../../icons/processed/lock.svg';
import { ReactComponent as LockOpen } from '../../icons/processed/lockOpen.svg';
import { ReactComponent as Mail } from '../../icons/processed/mail.svg';
import { ReactComponent as MailOpen } from '../../icons/processed/mailOpen.svg';
import { ReactComponent as Menu } from '../../icons/processed/menu.svg';
import { ReactComponent as People } from '../../icons/processed/people.svg';
import { ReactComponent as Person } from '../../icons/processed/person.svg';
import { ReactComponent as Refresh } from '../../icons/processed/refresh.svg';
import { ReactComponent as Search } from '../../icons/processed/search.svg';
import { ReactComponent as ShoppingBag } from '../../icons/processed/shoppingBag.svg';
import { ReactComponent as ShoppingCart } from '../../icons/processed/shoppingCart.svg';
import { ReactComponent as Star } from '../../icons/processed/star.svg';
import { ReactComponent as StarSolid } from '../../icons/processed/starSolid.svg';
import { ReactComponent as Tag } from '../../icons/processed/tag.svg';
import { ReactComponent as Trash } from '../../icons/processed/trash.svg';

const iconMap = {
  add: Add,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  bell: Bell,
  calendar: Calendar,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  clock: Clock,
  close: Close,
  ellipsis: Ellipsis,
  ellipsisVertical: EllipsisVertical,
  eye: Eye,
  eyeSlash: EyeSlash,
  heart: Heart,
  heartSolid: HeartSolid,
  home: Home,
  location: Location,
  lock: Lock,
  lockOpen: LockOpen,
  mail: Mail,
  mailOpen: MailOpen,
  menu: Menu,
  people: People,
  person: Person,
  refresh: Refresh,
  search: Search,
  shoppingBag: ShoppingBag,
  shoppingCart: ShoppingCart,
  star: Star,
  starSolid: StarSolid,
  tag: Tag,
  trash: Trash
};

export const Icon = ({ name, size = 24, color = 'currentColor' }: { name: keyof typeof iconMap; size?: number; color?: string }) => {
  const SvgIcon = iconMap[name];
  return SvgIcon ? <SvgIcon width={size} height={size} fill={color} /> : null;
};

Icon.displayName = 'Icon';
