//

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

  try {
    // Format the amount (negative for expenses, positive for income)
    const formattedAmount = isExpense
      ? -Math.abs(parseFloat(amount))
      : Math.abs(parseFloat(amount));

    const response = await fetch(`${API_URL}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        title,
        amount: formattedAmount,
        category: selectedCategory,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create transaction");
    }

    Alert.alert("Success", "Transaction created successfully");
    router.back();
  } catch (error) {
    Alert.alert("Error", error.message || "Failed to create transaction");
  } finally {
    setIsLoading(false);
  }
};
