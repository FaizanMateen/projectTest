const handleCreate = async () => {
  //validations
  if (!title.trim())
    return Alert.alert("Error", "Please enter a transaction title");

  if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
    Alert.alert("Error", "Please enter a valid amount");
    return;
  }

  if (!selectedCategory)
    return Alert.alert("Error", "Please select a category");

  setIsLoading(true);
  // validation re initialized
};

// only validation is done here
