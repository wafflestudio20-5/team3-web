import { TradeStatusType } from '../types/tradePost';

export const getTradeStatusKo = (status?: TradeStatusType | null) => {
  if (status === TradeStatusType.TRADING) {
    return '판매 중';
  } else if (status === TradeStatusType.RESERVATION) {
    return '예약 중';
  } else if (status === TradeStatusType.COMPLETED) {
    return '거래 완료';
  } else {
    return '거래 불가';
  }
};

export const toStringNumWithComma = (input?: number) => {
  if (!input) return 0;
  return String(input).replace(
    /(\..*)$|(\d)(?=(\d{3})+(?!\d))/g,
    (digit, fract) => fract || digit + ',',
  );
};
