import csv

# 1. Create empty lists to store data
all_movies = []
top_movies = []

# 2. Open the CSV file and read the data
with open('Movie_Dataset.csv', mode='r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        all_movies.append(row)

# 3. Print a message to show we started
print("Starting the movie analysis...")

# 4. Loop through all movies
for movie in all_movies:
# Get the rating and convert it to a number
    rating = float(movie['rating'])
    # Check if the rating is 8.5 or higher
    if rating >= 8.5:
    # Add the movie title to our top movies list
        top_movies.append(movie['title'])

# 5. Print the results
print("Here are the highly rated movies (8.5+):")
for movie in top_movies:
    print("- " + movie)

# 6. Print the total number of movies found
total_count = len(top_movies)
print(f"\nTotal number of top-rated movies found: {total_count}")

# 7. End of the program
print("Analysis complete.")
