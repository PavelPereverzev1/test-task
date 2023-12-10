const noticesFilter = (notices, filter) => {
  const { brand, price, from, to } = filter;
  if (brand) {
    notices = notices.filter(
      notice => notice.make.toLowerCase() === brand.toLowerCase()
    );
  }
  if (price) {
    notices = notices.filter(
      notice => Number(notice.rentalPrice.slice(1)) <= Number(price)
    );
  }
  if (from) {
    notices = notices.filter(notice => notice.mileage >= Number(from));
  }
  if (to) {
    notices = notices.filter(notice => notice.mileage <= Number(to));
  }

  return notices;
};

export default noticesFilter;
