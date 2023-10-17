# Async JS exercises

In this exercises, we'll create a directory of 3 random JSON files programmatically and then delete those files concurrently.

## Problem 1

### Part 1: Using Callbacks

**Implementation**:

- Create a directory:
  - Use `fs.mkdir` to create a directory named "json_files".
- Create JSON files:
  - Use a loop to create 3 random JSON files inside the "json_files" directory.
  - For each file, use `fs.writeFile` to write JSON data into the file.
- Delete JSON files concurrently:
  - Use `fs.readdir` to read the contents of the "json_files" directory.
  - Loop through the list of files and use `fs.unlink` to delete them.
  - Finally, use `fs.rmdir` to remove the "json_files" directory itself.

### Part 2: Using Callbacks and Promises

**Implementation**:

- Follow the same steps as Part 1 to create and delete JSON files.
- To make the implementation more efficient, wrap the asynchronous file operations in promises using the `util.promisify` function.

### Part 3: Using Async/Await

**Implementation**:

- Use the `fs.promises` module to work with promises directly.
- Create an async function to perform the directory creation, file creation, and deletion.

## Problem 2

In Problem 2, we'll use async/await to read a file, transform its content, and perform various file operations.

**Implementation**:

1. Read the file `lipsum.txt` using `fs.promises.readFile`.
2. Convert the contents to uppercase and write them to a new file called `uppercase.txt`. Store the new filename in `filenames.txt`.
3. Read the `uppercase.txt` file, convert it to lowercase, split it into sentences, and write each sentence into separate new files. Store the new filenames in `filenames.txt`.
4. Read the new files, sort their content, and write it to a new file called `sorted.txt`. Store the new filename in `filenames.txt`.
5. Read the contents of `filenames.txt` and delete all the new files mentioned in that list concurrently.

By breaking down the tasks into separate functions and chaining them together in a main async function, we can efficiently handle the asynchronous file operations in Problem 2.

**Note**: Ensure that you have the necessary error handling for file operations and appropriate file paths.
