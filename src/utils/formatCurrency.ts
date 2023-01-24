import isAndroid from './isAndroid';

export default function formatCurrency(value: number) {
  const result = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  return isAndroid ? result.replace('R$', 'R$ ') : result;
}
