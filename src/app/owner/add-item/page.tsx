'use client';

import { useState } from 'react';
import { clothingItems, colorPalette } from '../data';
import { apiFetch } from '@/src/lib/api';

type Category = keyof typeof clothingItems;

interface ColorSelectorProps {
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
}

function CategorySelect({
  clothingCategory,
  setClothingCategory,
  setClothingType,
}: {
  clothingCategory: Category | "";
  setClothingCategory: (cat: Category | "") => void;
  setClothingType: (type: string) => void;
}) {
  return (
    <div>
      <label className="block font-medium mb-1">Clothing Category</label>
      <select
        value={clothingCategory}
        onChange={(e) => {
          setClothingCategory(e.target.value as Category | "");
          setClothingType('');
        }}
        required
        className="w-full border rounded-md p-2"
      >
        <option value="">Select category</option>
        {Object.keys(clothingItems).map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

function TypeSelect({
  clothingCategory,
  clothingType,
  setClothingType,
}: {
  clothingCategory: Category | "";
  clothingType: string;
  setClothingType: (type: string) => void;
}) {
  const types = clothingCategory ? clothingItems[clothingCategory] : [];
  return (
    <div>
      <label className="block font-medium mb-1">Clothing Type</label>
      <select
        value={clothingType}
        onChange={(e) => setClothingType(e.target.value)}
        required
        disabled={!clothingCategory}
        className="w-full border rounded-md p-2"
      >
        <option value="">Select type</option>
        {types.map((type) => (
          <option key={type} value={type.toLowerCase()}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

function GenderDesignSelect({
  gender,
  setGender,
  design,
  setDesign,
}: {
  gender: string;
  setGender: (val: string) => void;
  design: string;
  setDesign: (val: string) => void;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <label className="block font-medium mb-1">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          className="w-full border rounded-md p-2"
        >
          <option value="">Select gender</option>
          <option value="u">Unisex</option>
          <option value="f">Female</option>
          <option value="m">Male</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block font-medium mb-1">Design</label>
        <select
          value={design}
          onChange={(e) => setDesign(e.target.value)}
          required
          className="w-full border rounded-md p-2"
        >
          <option value="">Select design</option>
          {[
            'Solid',
            'Striped',
            'Checkered',
            'Plaid',
            'Polka Dot',
            'Floral',
            'Camouflage',
            'Animal Print',
            'Colorblock',
            'Graphic Print',
          ].map((d) => (
            <option key={d} value={d.toLowerCase()}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function ColorSelector({ selectedColors, setSelectedColors }: ColorSelectorProps) {
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');

  const addColor = () => {
    if (!primaryColor) return alert('Please select a primary color');
    const colorPair = secondaryColor ? `${primaryColor}, ${secondaryColor}` : primaryColor;
    setSelectedColors([...selectedColors, colorPair]);
    setPrimaryColor('');
    setSecondaryColor('');
  };

  const removeColor = (index: number) => {
    setSelectedColors(selectedColors.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="block font-medium mb-1">Primary & Secondary Colors</label>
      <div className="flex gap-2 items-center mb-2">
        <select
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          className="border rounded-md p-2 flex-1"
        >
          <option value="">Primary Color</option>
          {Object.entries(colorPalette).map(([name, hex]) => (
            <option key={name} value={hex}>{name}</option>
          ))}
        </select>
        <select
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
          className="border rounded-md p-2 flex-1"
        >
          <option value="">Secondary Color (Optional)</option>
          {Object.entries(colorPalette).map(([name, hex]) => (
            <option key={name} value={hex}>{name}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={addColor}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Add
        </button>
      </div>
      {selectedColors.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedColors.map((color, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-200 rounded-md text-sm flex items-center gap-1">
              {color}
              <button type="button" onClick={() => removeColor(idx)} className="text-red-500 font-bold">×</button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AddItemPage() {
  const [clothingCategory, setClothingCategory] = useState<Category | "">("");
  const [clothingType, setClothingType] = useState('');
  const [itemURL, setItemURL] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [gender, setGender] = useState('');
  const [design, setDesign] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [flashMessage, setFlashMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedColors.length) {
      alert("Add at least one color");
      return;
    }

    const payload = {
      clothing_category: clothingCategory,
      clothing_type: clothingType,
      item_url: itemURL,
      image_url: imageURL,
      gender,
      design,
      available_colors: selectedColors.join(" | "),
    };

    try {
      // apiFetch returns JSON directly
      const data = await apiFetch("/owner/add_item", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      // Success path
      setFlashMessage(data.message || "Item successfully added!");

      setClothingCategory("");
      setClothingType("");
      setItemURL("");
      setImageURL("");
      setGender("");
      setDesign("");
      setSelectedColors([]);

    } catch (err: any) {
      // apiFetch throws Error(err.error)
      setFlashMessage(err.message || "Network error.");
    }
  };


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">Add New Clothing Item</h2>
      {flashMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {flashMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <CategorySelect clothingCategory={clothingCategory} setClothingCategory={setClothingCategory} setClothingType={setClothingType} />
        <TypeSelect clothingCategory={clothingCategory} clothingType={clothingType} setClothingType={setClothingType} />
        <div>
          <label className="block font-medium mb-1">Item URL</label>
          <input type="url" value={itemURL} onChange={(e) => setItemURL(e.target.value)} required className="w-full border rounded-md p-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} required className="w-full border rounded-md p-2" />
        </div>
        <GenderDesignSelect gender={gender} setGender={setGender} design={design} setDesign={setDesign} />
        <ColorSelector selectedColors={selectedColors} setSelectedColors={setSelectedColors} />
        <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 mt-4">Submit</button>
      </form>
    </div>
  );
}
