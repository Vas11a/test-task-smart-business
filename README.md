### Опис вибраних підходів та технологій

1) Я вирішив використовувати **Redux Toolkit** замість звичайного **Redux**, адже він, на мою думку, більш зручний та лаконічний.
2) Щодо запитів на сервер, я вибрав підхід, який дозволить легко масштабувати додаток у майбутньому.
3) Для фільтрації деякий час вагався, чи варто змінювати масив користувачів безпосередньо в Redux чи за допомогою проміжної функції робити все локально в компоненті. Врешті-решт, я обрав другий варіант, адже він видався мені більш доречним та кращим для подальшого масштабування. Для цього використав **createSelector** з **Redux Toolkit**.

В цілому по основним моментам це все, в іншому все досить класично і стандартно.
Сподіваюсь, вам сподобається, з нетерпінням чекаю на ваш фідбек!

---

### Summary of Selected Approaches and Technologies

1) I decided to use **Redux Toolkit** instead of regular **Redux** because, in my opinion, it is more convenient and concise.
2) Regarding server requests, I chose an approach that would allow for easy scalability of the application in the future.
3) For filtering, I hesitated for a while whether to modify the array of users directly in Redux or to handle everything locally in the component using an intermediary function. Ultimately, I chose the latter option, as it seemed more appropriate and better suited for future scalability. I used **createSelector** from **Redux Toolkit** for this purpose.

Overall, these are the main points; everything else is quite classic and standard.
I hope you enjoy it, and I look forward to your feedback!
