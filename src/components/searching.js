import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison(
        ["skipEmptyTargetValues"],
        [rules.searchMultipleFields(searchField, ["date", "customer", "seller"], false)]
    );

    return (data, state) => {
        // @todo: #5.2 — применить компаратор
        if (state.search) {
            return data.filter(item => compare(item, state));
        }
        return data;
    }
}