import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";

const EducationModal = ({ open, onClose, data }) => {
  if (!data) return null;

  const details = [
    { label: "Specialization", value: data.specialization },
    { label: "Institution", value: data.institution },
    { label: "University / Board", value: data.university },
    { label: "Location", value: data.location },
    { label: "Duration", value: data.duration },
    { label: "Grade", value: data.grade },
  ].filter((item) => item.value);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="
          max-w-5xl
          glass-strong
          glow
          border border-primary/30
          max-h-[90vh]
          overflow-y-auto
          overflow-x-visible
        "
      >
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-glow text-center mb-6">
            {data.fullForm}
          </DialogTitle>
        </DialogHeader>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* IMAGE  */}
          {data.label && (
            <div
              className="
                flex justify-center items-center
                w-full
                overflow-visible
                mt-4
                md:-mt-10
              "
            >
              <div className="w-48 sm:w-56 md:w-72 lg:w-[24rem] aspect-square">
                <img
                  src={data.label}
                  alt={data.fullForm}
                  className="
                    w-full h-full
                    object-contain
                    rounded-xl
                    shadow-lg
                  "
                />
              </div>
            </div>
          )}

          {/* TEXT CONTENT */}
          <div className="space-y-6">
            <ul className="space-y-3 text-sm sm:text-base">
              {details.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>

            {data.activities?.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Activities</h4>
                <ul className="list-disc list-inside space-y-1">
                  {data.activities.map((act, i) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>
              </div>
            )}

            {data.skills?.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/20 text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {data.description && (
              <p className="text-justify text-muted-foreground text-sm sm:text-base">
                {data.description}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationModal;
