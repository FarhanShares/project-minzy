export const dummyUser = items => {
  return {
    package_create: {
      user: 8761,
      api_key: "Cr2Y2d3SEV7ZESEFtzDE2YH88vlmc5b2",
      addresses: [{
          countryCode: "US",
          postCode: "1010",
          freeformAddressLine1: "1-Brīvības 9",
          freeformAddressLine2: "1-Brīvības 19",
          name: "Nickname",
          company: "Brand name",
          contentType: "Gift",
          contentItems: items
        },
        {
          countryCode: "US",
          postCode: "1010",
          freeformAddressLine1: "2-Brīvības 19",
          freeformAddressLine2: "2-Brīvības 19",
          name: "Nickname2",
          company: "Brand name2",
          contentType: "Gift",
          contentItems: items
        }
      ],
      type: "Goods",
      weightTo: 100,
      deliveryClass: "A class",
      postageType: "Registered",
      itemType: "Small packet"
    }
  };
};
