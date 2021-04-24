const dataInput = [{
  type: 'text',
  value: { searchText },
  onChangeFunction: { onSearchTextChange },
  datadoinput: 'text-input',
  datadolabel: 'text-input-label',
  name: 'include-text',
  labelText: 'Inclui o texto',
},
{
  type: 'checkbox',
  onChangeFunction: { onBookmarkedChange },
  datadoinput: 'checkbox-input',
  datadolabel: 'checkbox-input-label',
  name: 'check-input',
  labelText: 'Mostrar somente favoritos',
  checked: { bookmarkedOnly },
},
];
export default dataInput;
