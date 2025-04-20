"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Save, Download, Trash2 } from "lucide-react"

type PackingItem = {
  id: string
  name: string
  category: string
  packed: boolean
}

type PackingList = {
  id: string
  name: string
  destination: string
  climate: string
  duration: string
  items: PackingItem[]
}

export default function PackingAssistant() {
  const [lists, setLists] = useState<PackingList[]>([
    {
      id: "1",
      name: "Beach Vacation",
      destination: "Hawaii",
      climate: "tropical",
      duration: "7 days",
      items: [
        { id: "1-1", name: "Swimsuit", category: "clothing", packed: true },
        { id: "1-2", name: "Sunscreen", category: "toiletries", packed: false },
        { id: "1-3", name: "Beach towel", category: "accessories", packed: false },
        { id: "1-4", name: "Sunglasses", category: "accessories", packed: true },
        { id: "1-5", name: "Flip flops", category: "footwear", packed: false },
      ],
    },
    {
      id: "2",
      name: "Business Trip",
      destination: "New York",
      climate: "temperate",
      duration: "3 days",
      items: [
        { id: "2-1", name: "Suit", category: "clothing", packed: false },
        { id: "2-2", name: "Dress shoes", category: "footwear", packed: false },
        { id: "2-3", name: "Laptop", category: "electronics", packed: true },
        { id: "2-4", name: "Business cards", category: "documents", packed: false },
      ],
    },
  ])

  const [activeList, setActiveList] = useState<string>(lists[0]?.id || "")
  const [newListName, setNewListName] = useState("")
  const [newListDestination, setNewListDestination] = useState("")
  const [newListClimate, setNewListClimate] = useState("temperate")
  const [newListDuration, setNewListDuration] = useState("")
  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("clothing")
  const [showNewListForm, setShowNewListForm] = useState(false)

  const categories = [
    { value: "clothing", label: "Clothing" },
    { value: "toiletries", label: "Toiletries" },
    { value: "electronics", label: "Electronics" },
    { value: "documents", label: "Documents" },
    { value: "accessories", label: "Accessories" },
    { value: "footwear", label: "Footwear" },
    { value: "medications", label: "Medications" },
    { value: "other", label: "Other" },
  ]

  const climates = [
    { value: "tropical", label: "Tropical" },
    { value: "temperate", label: "Temperate" },
    { value: "cold", label: "Cold" },
    { value: "desert", label: "Desert" },
    { value: "alpine", label: "Alpine" },
  ]

  const getCurrentList = () => {
    return lists.find((list) => list.id === activeList)
  }

  const addNewList = () => {
    if (!newListName) return

    const newList: PackingList = {
      id: Date.now().toString(),
      name: newListName,
      destination: newListDestination,
      climate: newListClimate,
      duration: newListDuration,
      items: generateSuggestedItems(newListClimate),
    }

    setLists([...lists, newList])
    setActiveList(newList.id)
    setShowNewListForm(false)
    resetNewListForm()
  }

  const resetNewListForm = () => {
    setNewListName("")
    setNewListDestination("")
    setNewListClimate("temperate")
    setNewListDuration("")
  }

  const addNewItem = () => {
    if (!newItemName || !activeList) return

    const currentList = getCurrentList()
    if (!currentList) return

    const newItem: PackingItem = {
      id: `${activeList}-${Date.now()}`,
      name: newItemName,
      category: newItemCategory,
      packed: false,
    }

    const updatedLists = lists.map((list) => {
      if (list.id === activeList) {
        return {
          ...list,
          items: [...list.items, newItem],
        }
      }
      return list
    })

    setLists(updatedLists)
    setNewItemName("")
  }

  const toggleItemPacked = (itemId: string) => {
    const updatedLists = lists.map((list) => {
      if (list.id === activeList) {
        return {
          ...list,
          items: list.items.map((item) => {
            if (item.id === itemId) {
              return { ...item, packed: !item.packed }
            }
            return item
          }),
        }
      }
      return list
    })

    setLists(updatedLists)
  }

  const removeItem = (itemId: string) => {
    const updatedLists = lists.map((list) => {
      if (list.id === activeList) {
        return {
          ...list,
          items: list.items.filter((item) => item.id !== itemId),
        }
      }
      return list
    })

    setLists(updatedLists)
  }

  const deleteList = (listId: string) => {
    const updatedLists = lists.filter((list) => list.id !== listId)
    setLists(updatedLists)

    if (updatedLists.length > 0) {
      setActiveList(updatedLists[0].id)
    } else {
      setActiveList("")
    }
  }

  const getPackedPercentage = (list: PackingList) => {
    if (list.items.length === 0) return 0
    const packedItems = list.items.filter((item) => item.packed).length
    return Math.round((packedItems / list.items.length) * 100)
  }

  const generateSuggestedItems = (climate: string): PackingItem[] => {
    const baseItems = [
      { id: `base-${Date.now()}-1`, name: "Passport", category: "documents", packed: false },
      { id: `base-${Date.now()}-2`, name: "Phone charger", category: "electronics", packed: false },
      { id: `base-${Date.now()}-3`, name: "Toothbrush", category: "toiletries", packed: false },
      { id: `base-${Date.now()}-4`, name: "Toothpaste", category: "toiletries", packed: false },
      { id: `base-${Date.now()}-5`, name: "Underwear", category: "clothing", packed: false },
      { id: `base-${Date.now()}-6`, name: "Socks", category: "clothing", packed: false },
    ]

    let climateItems: PackingItem[] = []

    switch (climate) {
      case "tropical":
        climateItems = [
          { id: `climate-${Date.now()}-1`, name: "Swimsuit", category: "clothing", packed: false },
          { id: `climate-${Date.now()}-2`, name: "Sunscreen", category: "toiletries", packed: false },
          { id: `climate-${Date.now()}-3`, name: "Sunglasses", category: "accessories", packed: false },
          { id: `climate-${Date.now()}-4`, name: "Flip flops", category: "footwear", packed: false },
          { id: `climate-${Date.now()}-5`, name: "Hat", category: "accessories", packed: false },
        ]
        break
      case "cold":
        climateItems = [
          { id: `climate-${Date.now()}-1`, name: "Winter coat", category: "clothing", packed: false },
          { id: `climate-${Date.now()}-2`, name: "Gloves", category: "accessories", packed: false },
          { id: `climate-${Date.now()}-3`, name: "Scarf", category: "accessories", packed: false },
          { id: `climate-${Date.now()}-4`, name: "Thermal underwear", category: "clothing", packed: false },
          { id: `climate-${Date.now()}-5`, name: "Winter boots", category: "footwear", packed: false },
        ]
        break
      case "desert":
        climateItems = [
          { id: `climate-${Date.now()}-1`, name: "Sun hat", category: "accessories", packed: false },
          { id: `climate-${Date.now()}-2`, name: "Sunscreen", category: "toiletries", packed: false },
          { id: `climate-${Date.now()}-3`, name: "Lip balm", category: "toiletries", packed: false },
          { id: `climate-${Date.now()}-4`, name: "Water bottle", category: "accessories", packed: false },
          { id: `climate-${Date.now()}-5`, name: "Light scarf", category: "accessories", packed: false },
        ]
        break
      default:
        climateItems = [
          { id: `climate-${Date.now()}-1`, name: "Light jacket", category: "clothing", packed: false },
          { id: `climate-${Date.now()}-2`, name: "Umbrella", category: "accessories", packed: false },
          { id: `climate-${Date.now()}-3`, name: "Walking shoes", category: "footwear", packed: false },
        ]
    }

    return [...baseItems, ...climateItems]
  }

  const groupItemsByCategory = (items: PackingItem[]) => {
    return items.reduce(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
      },
      {} as Record<string, PackingItem[]>,
    )
  }

  const currentList = getCurrentList()
  const groupedItems = currentList ? groupItemsByCategory(currentList.items) : {}

  return (
    <div className="space-y-8">
      {showNewListForm ? (
        <Card>
          <CardHeader>
            <CardTitle>Create New Packing List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="list-name">List Name</Label>
                  <Input
                    id="list-name"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    placeholder="e.g. Summer Vacation"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="list-destination">Destination</Label>
                  <Input
                    id="list-destination"
                    value={newListDestination}
                    onChange={(e) => setNewListDestination(e.target.value)}
                    placeholder="e.g. Paris, France"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="list-climate">Climate</Label>
                  <Select value={newListClimate} onValueChange={setNewListClimate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select climate" />
                    </SelectTrigger>
                    <SelectContent>
                      {climates.map((climate) => (
                        <SelectItem key={climate.value} value={climate.value}>
                          {climate.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="list-duration">Duration</Label>
                  <Input
                    id="list-duration"
                    value={newListDuration}
                    onChange={(e) => setNewListDuration(e.target.value)}
                    placeholder="e.g. 7 days"
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setShowNewListForm(false)}>
                  Cancel
                </Button>
                <Button onClick={addNewList} className="bg-sky-600 hover:bg-sky-700">
                  <Save className="mr-2 h-4 w-4" />
                  Create List
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">My Packing Lists</h2>
            <Button onClick={() => setShowNewListForm(true)} className="bg-sky-600 hover:bg-sky-700">
              <Plus className="mr-2 h-4 w-4" />
              New List
            </Button>
          </div>

          <div className="grid md:grid-cols-[250px_1fr] gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                {lists.length > 0 ? (
                  lists.map((list) => (
                    <Button
                      key={list.id}
                      variant={activeList === list.id ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setActiveList(list.id)}
                    >
                      <div className="flex-1 text-left">
                        {list.name}
                        <div className="text-xs opacity-70">
                          {list.destination} • {list.duration}
                        </div>
                      </div>
                      <div className="ml-2 text-xs font-medium">{getPackedPercentage(list)}%</div>
                    </Button>
                  ))
                ) : (
                  <div className="text-center py-8 border-2 border-dashed rounded-lg">
                    <p className="text-gray-500">No packing lists yet.</p>
                  </div>
                )}
              </div>
            </div>

            {currentList ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{currentList.name}</h3>
                    <div className="text-sm text-gray-500">
                      {currentList.destination} • {currentList.climate} climate • {currentList.duration}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => deleteList(currentList.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600" style={{ width: `${getPackedPercentage(currentList)}%` }}></div>
                  </div>
                  <span className="text-sm font-medium">{getPackedPercentage(currentList)}% packed</span>
                </div>

                <div className="space-y-6">
                  {Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <h4 className="font-medium capitalize">{category}</h4>
                      <Card>
                        <CardContent className="p-0">
                          {items.map((item) => (
                            <div key={item.id} className="flex items-center p-3 border-b last:border-0">
                              <Checkbox
                                id={item.id}
                                checked={item.packed}
                                onCheckedChange={() => toggleItemPacked(item.id)}
                              />
                              <Label
                                htmlFor={item.id}
                                className={`ml-2 flex-1 ${item.packed ? "line-through text-gray-400" : ""}`}
                              >
                                {item.name}
                              </Label>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-red-500"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Add New Item</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Input
                          value={newItemName}
                          onChange={(e) => setNewItemName(e.target.value)}
                          placeholder="Enter item name"
                        />
                      </div>
                      <Select value={newItemCategory} onValueChange={setNewItemCategory}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button onClick={addNewItem} className="bg-sky-600 hover:bg-sky-700">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-gray-500">Select a packing list or create a new one.</p>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
