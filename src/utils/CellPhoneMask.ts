export const cellPhoneMask = (phoneNumber: string): string => {
  const qtd = phoneNumber.replace(/\D/g, '').length === 10 ? 4 : 5;
  if (qtd === 4) {
    return phoneNumber.replace(/\D/g, '').replace(/(\d{2})(\d{0,4})(\d{0,4})/, (match, p1, p2, p3) => {
      let result = `(${p1}`;

      if (p2) result += `) ${p2}`;
      if (p3) result += `-${p3}`;

      return result;
    });
  } else {
    return phoneNumber.replace(/\D/g, '').replace(/(\d{2})(\d{0,5})(\d{0,4})/, (match, p1, p2, p3) => {
      let result = `(${p1}`;

      if (p2) result += `) ${p2}`;
      if (p3) result += `-${p3}`;

      return result;
    });
  }
};