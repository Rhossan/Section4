export const filterData = (data, searchParams) => {
    return data.filter(d => d.name.toLowerCase().search(searchParams.toLowerCase()) > -1)
}