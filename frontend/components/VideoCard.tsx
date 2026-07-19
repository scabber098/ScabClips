type Props = {
  result: any;
};

export default function VideoCard({ result }: Props) {
  if (!result) return null;

  return (
    <div className="mt-10 bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">

      {/* VIDEO */}

      <video
        src={result.video_url}
        controls
        className="w-full max-h-[450px] bg-black"
      />

      <div className="p-8">

        <h2 className="text-3xl font-bold text-green-400">
          ✅ Upload Successful
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-8">

          <div>
            <p className="text-neutral-400">Filename</p>
            <p className="font-semibold break-all">
              {result.filename}
            </p>
          </div>

          <div>
            <p className="text-neutral-400">Video ID</p>
            <p className="font-semibold break-all">
              {result.video_id}
            </p>
          </div>

          <div>
            <p className="text-neutral-400">Duration</p>
            <p className="font-semibold">
              {result.duration} sec
            </p>
          </div>

          <div>
            <p className="text-neutral-400">Resolution</p>
            <p className="font-semibold">
              {result.width} × {result.height}
            </p>
          </div>

          <div>
            <p className="text-neutral-400">File Size</p>
            <p className="font-semibold">
              {(result.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}