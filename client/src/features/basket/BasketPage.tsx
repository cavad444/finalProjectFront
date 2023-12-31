import { Button, Grid, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";

export default function BasketPage() {
  const { basket, status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  if (!basket) {
    return <Typography variant="h3">Your basket is empty</Typography>;
  }
  return (
    <>
      <Grid item xs={12} md={6}>
        <BasketTable items={basket.items} />
      </Grid>
      <Grid item xs={12} md={6}>
        <BasketSummary />
        <Button
          component={Link}
          to="/checkout"
          variant="contained"
          size="large"
          fullWidth
        >
          Checkout
        </Button>
      </Grid>
    </>
  );
}
