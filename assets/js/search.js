const searchInstance = new mdb.Datatable.getInstance(document.getElementById('datatable'))

document.getElementById('datatable-search-input').addEventListener('input', (e) => {
    searchInstance.search(e.target.value);
});