import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function FeaturedIcons({ type }) {
  if (type === 0) return <CakeRoundedIcon />;
  if (type === 1) return <DeliveryDiningRoundedIcon />;
  if (type === 2) return <FavoriteRoundedIcon />;
}

export default FeaturedIcons;
