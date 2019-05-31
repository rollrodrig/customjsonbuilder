export const keyValueDivider = (s:string) => {
    let splited = s.split(/:(.*)/);
    return {
        key: splited[0],
        value:splited[1]
    }
}