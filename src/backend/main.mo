import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Text "mo:core/Text";

actor {
  type Submission = {
    name : Text;
    email : Text;
    projectType : Text;
    message : Text;
  };

  module Submission {
    public func compare(a : Submission, b : Submission) : Order.Order {
      switch (Text.compare(a.name, b.name)) {
        case (#equal) { Text.compare(a.email, b.email) };
        case (order) { order };
      };
    };
  };

  let submissions = Map.empty<Text, Submission>();

  public shared ({ caller }) func submitContact(
    id : Text,
    name : Text,
    email : Text,
    projectType : Text,
    message : Text,
  ) : async () {
    let submission : Submission = {
      name;
      email;
      projectType;
      message;
    };
    submissions.add(id, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };
};
