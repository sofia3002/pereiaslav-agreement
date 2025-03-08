import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const topics = [
  { question: "Що таке Переяславська угода?", answer: "Це угода 1654 року між Військом Запорозьким та Московським царством про військовий союз." },
  { question: "Які були наслідки угоди?", answer: "Вона призвела до залежності України від Московії, що змінило хід її історії." },
  { question: "Хто був головними учасниками?", answer: "Богдан Хмельницький та цар Олексій Михайлович." },
  { question: "Які були умови угоди?", answer: "Збереження автономії Війська Запорозького, захист від Польщі." },
];

export default function PereiaslavAgreement() {
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter(t => 
    t.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Переяславська угода 1654 року</h1>
        <div className="relative mb-4">
          <Input 
            placeholder="Знайти питання..." 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            className="pl-10"
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        </div>
        <div className="space-y-4">
          {filteredTopics.map((t, index) => (
            <Card key={index} className="border rounded-lg">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{t.question}</h2>
                <p className="text-gray-700 mt-2">{t.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredTopics.length === 0 && (
          <p className="text-gray-500 mt-4">Нічого не знайдено...</p>
        )}
      </div>
    </div>
  );
}
