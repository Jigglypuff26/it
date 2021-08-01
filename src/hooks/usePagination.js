import { useCallback, useRef, useState } from 'react'

export const usePagination = () => {
    // текущая страница
    const [curentPage, setCurentPage] = useState(1)
    // максимальное кол-во айтемов на странице
    const itemsInPage = 3
    // Отсортированный массив
    const [sortarray, setSortarray] =useState(null)
    // ключи для хранения состояний направления сортировки
    const sortKeys = useRef({
        fio: false,
        createDate: true,
        email: false,
        distance: false,
        donations: false
    })
    
    // создание массива с нумерацие страниц
    const paginator = useCallback((array, start, end) => {
      let exitarray = []
      if(Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
          if(i <= end && i >= start) {
            exitarray.push(array[i])
          }        
        }
      }
      return exitarray
    }, [])

    // сортировка массива
    const sortList = useCallback((array ,key) => {
        array.sort(function (a, b) {
          if (a[key] < b[key]) {
            return 1;
          }
          if (a[key] > b[key]) {
            return -1;
          }
          return 0
        })
        if(sortKeys.current[key]) {
          sortKeys.current[key] = !sortKeys.current[key]
          setSortarray(array)      
        } else {
          array.reverse()
          sortKeys.current[key] = !sortKeys.current[key]
          setSortarray(array)
        }
    }, [])

  return {sortKeys, paginator, sortList, sortarray, setSortarray, curentPage, setCurentPage, itemsInPage}
}