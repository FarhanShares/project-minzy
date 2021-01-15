export function shippingDocumentJson(
  packageId = "1744",
  trackingId = "RR252989912LV",
  documentType = "Accompanying documents"
) {
  return {
    document: {
      user: 8761,
      api_key: "Cr2Y2d3SEV7ZESEFtzDE2YH88vlmc5b2",

      package: packageId,
      barcode: trackingId,

      documentType: documentType
    }
  };
}

export function createPackageJson(
  items = [{
    name: "Item name",
    value: 1,
    weight: 100,
    quantity: 1
  }]
) {
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
}
