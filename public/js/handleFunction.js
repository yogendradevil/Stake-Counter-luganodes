const dataModel = require('../../models/dataModel');

// Serve static files from the 'public' directory
router.use(express.static(path.join(__dirname, "../public")));

// Function to update the total stake based on the data in the database
async function updateTotalStake() {
  try {
    const data = await DataModel.findOne({});
    if (data) {
      // Assuming the properties are named correctly in the dataModel
      const totalStake = data.Cardano + data.Polkadot + data.Kusama;
      const totalStakeElement = document.getElementById('totalStake');
      totalStakeElement.innerText = totalStake;
    }
  } catch (error) {
    console.error('Error occurred while updating total stake:', error);
  }
}


// Function to add or remove stake for a specific cryptocurrency
async function updateStake(cryptoName, valueToAdd) {
  try {
    const data = await DataModel.findOne({ name: cryptoName });
    if (data) {
      // Find the cryptocurrency in the database and update its value
      data.value += valueToAdd;
      await data.save();

      // Update the display for the specific cryptocurrency
      const cryptoStakeElement = document.getElementById(`${cryptoName}Stake`);
      cryptoStakeElement.innerText = data.value;

      // Update the total stake in the display
      await updateTotalStake();
    }
  } catch (error) {
    console.error('Error occurred while updating stake:', error);
  }
}


// Function to add stake for a specific cryptocurrency
async function addToTotal(cryptoName) {
  await updateStake(cryptoName, 1); // Increase the respective cryptocurrency's value by 1
}

// Function to remove stake for a specific cryptocurrency
async function removeFromTotal(cryptoName) {
  await updateStake(cryptoName, -1); // Decrease the respective cryptocurrency's value by 1
}

// Update the total stake initially when the page loads
updateTotalStake();