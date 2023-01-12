import { Button } from './trade-status-button.styled';

const TradeStatusButton = ({ tradeStatus }: { tradeStatus: string }) => {
  return (
    <Button tradeStatus={tradeStatus}>
      {tradeStatus === 'booked' ? '예약중' : '거래완료'}
    </Button>
  );
};

export default TradeStatusButton;
