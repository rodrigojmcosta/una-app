export const cpfMask = (value: string): string => {
  const numericValue = value.replace(/\D/g, '');

  if (numericValue.length <= 11) {
    return numericValue.replace(/(\d{3})(\d{3})?(\d{3})?(\d{0,2})/, (_, p1, p2, p3, p4) => {
      let mask = p1;
      if (p2) mask += `.${p2}`;
      if (p3) mask += `.${p3}`;
      if (p4) mask += `-${p4}`;
      return mask;
    });
  }
  return numericValue
};