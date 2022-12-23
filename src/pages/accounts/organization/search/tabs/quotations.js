// material-ui
import { Card, CardHeader, Stack, Typography , useTheme} from '@mui/material';
import Button from 'themes/overrides/Button';

const TabQuotations = () => {
  // theme
  const theme = useTheme();

  const mainCardHeaderDefault = {
    marginLeft: '10px',
    fontSize: '12px',
    fontWeight: 500,
    color: theme.palette.primary.main
  };
  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center">
            <Typography>Quotations History</Typography>
            <Typography xs={mainCardHeaderDefault}>3 Total</Typography>
          </Stack>
        }
        action={
          <Button type="button" variant="contained">
            Quotations
          </Button>
        }
      />
    </Card>
  );
};

export default TabQuotations;
