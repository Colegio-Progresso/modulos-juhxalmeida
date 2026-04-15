export function calculaMedia(a){
    let i = 0
    let soma = 0
    while(i < a.length){
        soma = soma + a[i]
        i++
    }
    const media = soma / a.length
    return media
}