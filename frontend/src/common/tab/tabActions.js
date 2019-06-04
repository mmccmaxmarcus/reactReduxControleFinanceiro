
export function selectTab(tabid) {
    return {
        type:'TAB_SELECTED',
        payload: tabid
    }
}

export function showTabs(...tabIds) {
    const tabsToshow = {}
    tabIds.forEach(e => tabsToshow[e] = true)
    return {
        type: 'TAB_SHOWED', 
        payload: tabsToshow
    }
}