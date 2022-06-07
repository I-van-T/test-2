// ✅ Логически и синтаксически сгруппированные сущности
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Это метод объекта
  getBooks() {
    console.log("Этот метод будет возвращать все книги - свойство books");
  },
  // Это метод объекта
  addBook(bookName) {
    console.log("Этот метод будет добавлять новую книгу в свойство books");
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook("Новая книга");
