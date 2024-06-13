import numpy as np
import json

# Load the pixel data
pixel_data = np.load('src/pixel_data.npy')

# Ensure the data is in the correct shape (height, width, channels)
height, width, channels = pixel_data.shape
assert channels == 3  # Ensure the data has 3 channels (RGB)

# Convert the numpy array to a list
pixel_data_list = pixel_data.tolist()

# Save the list as a JSON file
with open('src/pixel_data.json', 'w') as f:
    json.dump({
        'height': height,
        'width': width,
        'data': pixel_data_list
    }, f)
