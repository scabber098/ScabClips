import { RefObject } from "react";

type Props = {
  inputRef: RefObject<HTMLInputElement | null>;
  uploading: boolean;
};

export default function UploadZone({
  inputRef,
  uploading,
}: Props) {
  return (
    <div className="mt-12 border-2 border-dashed border-neutral-700 rounded-3xl p-20 text-center">

      <h2 className="text-3xl font-semibold">
        Drag & Drop Video Here
      </h2>

      <p className="mt-3 text-neutral-500">
        or
      </p>

      <button
        onClick={() => inputRef.current?.click()}
        className="mt-8 bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-xl font-bold"
      >
        {uploading ? "Uploading..." : "Choose Video"}
      </button>

    </div>
  );
}