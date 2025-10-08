type MenuOptions = '' | 'all' | 'cats' | 'dogs' | 'fishes'

export const createMenuObject = (activeMenu: MenuOptions) => {
    let obejtcMenu = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false,
    }

    if (activeMenu !==  ''){
        obejtcMenu[activeMenu] = true
    }

    return obejtcMenu

}