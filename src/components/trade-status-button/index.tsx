import { Button } from './trade-status-button.styled';

const TradeStatusButton = ({ tradeStatus }: { tradeStatus: string }) => {
  return (
    <>
      {tradeStatus !== 'TRADING' && (
        <Button tradeStatus={tradeStatus}>
          {tradeStatus === 'RESERVATION' ? '예약중' : '거래완료'}
        </Button>
      )}
    </>
  );
};

export default TradeStatusButton;
