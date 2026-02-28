import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../src/components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="min-h-screen w-full bg-slate-500 p-6 flex justify-center items-center">
      {/* Voltamos com o w-[500px] fixo */}
      <div className="w-[500px] flex flex-col space-y-4">
        <div className="flex items-center justify-center relative mb-6 w-full">
          {/* Botão fixado na esquerda sem empurrar o H1 */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 text-slate-100 hover:text-slate-300 transition-colors"
          >
            <ChevronLeftIcon size={28} />
          </button>

          {/* O H1 ocupa a linha toda e centraliza o texto no meio dos 500px */}

          <Title>Detalhes da Tarefa</Title>
        </div>

        {/* Card com bordas arredondadas e padding funcional */}
        <div className="bg-slate-200 p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-slate-500 break-words mb-2">
            {title}
          </h2>
          <p className="text-slate-600 break-words whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
