import { useCallback, useState } from "react"
import { Employee } from "../utils/types"
import { useCustomFetch } from "./useCustomFetch"
import { EmployeeResult } from "./types"

export function useEmployees(): EmployeeResult {
  const { fetchWithCache, loading } = useCustomFetch()
  const [employees, setEmployees] = useState<Employee[] | null>(null)

  const fetchAll = useCallback(async () => {
<<<<<<< HEAD
    const employeesData = await fetchWithCache<Employee[]>("employees", { initial: ""})
=======
    const employeesData = await fetchWithCache<Employee[]>("employees")
>>>>>>> 088216e04dca725a3755c3a0b6e54d8dc36c5fbc
    setEmployees(employeesData)
  }, [fetchWithCache])

  const invalidateData = useCallback(() => {
    setEmployees(null)
  }, [])

  return { data: employees, loading, fetchAll, invalidateData }
}
