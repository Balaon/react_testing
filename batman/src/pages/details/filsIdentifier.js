
export default function movieIdentifier (elem, code) {
        
    for (const key in elem) {
        const { id } = elem[key].show;
        if( Number(code) === id) return key;
    }
   
}
