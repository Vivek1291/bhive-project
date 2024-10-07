

export interface OfficeDetailsInterface {
    name: string,
    images: string[],
    distance: number,
    day_pass_price: number,
    day_pass_discounts_percentage: number,
    bulk_pass_price: number,
    bulk_pass_days: number,
    officeType: string,
    discount: number
}

export interface DataCollections {
    bulkDetails: OfficeDetailsInterface[]
}

