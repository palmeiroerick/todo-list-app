let
  pkgs = import <nixpkgs> {};

  packages = with pkgs; [
    nodejs
    corepack
    nodePackages."@angular/cli"
  ];
in
  pkgs.mkShell {
    buildInputs = packages;
  }
