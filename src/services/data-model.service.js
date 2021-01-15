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
