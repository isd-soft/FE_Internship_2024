export const mapFromJson = (json) =>{
    return new Map(Object.entries(JSON.parse(json)))
}